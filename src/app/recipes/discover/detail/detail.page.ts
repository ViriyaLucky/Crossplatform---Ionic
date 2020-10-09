import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalSample1Component } from '../../components/modal-sample1/modal-sample1.component';

import{ Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl:ModalController,
    private loadingCtrl: LoadingController,
    private actionCtrl: ActionSheetController

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')) {return;}
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Deleting recipe...',
      duration: 5000
    });

    await loading.present();

    const{ role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  deleteRecipe(){
    this.presentLoading().then(() => {
      this.recipesService.deleteRecipe(this.loadedRecipe.id);
      this.presentToast();
      this.router.navigate(['/recipes']);
    });
   
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteRecipe()
        }
      ]
    });
    await alert.present();
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: ModalSample1Component,
      componentProps: { selectedRecipe: this.loadedRecipe}
    });

    modal.onDidDismiss().then(resultData =>{
      console.log(resultData.data, resultData.role);
    });
    return await modal.present();

  }
  async presentAction(){
    const actionSheet = await this.actionCtrl.create({
      header: 'Recipe Action',
      buttons: [{
        text: 'Edit',
        role: 'edit',
        icon: 'create-outline',
        handler: () => {
          console.log('Edit clicked');
        }
      }, {
        text: 'New',
        icon: 'add',
        handler: () => {
          console.log('New clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });

    await actionSheet.present();
  }
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Recipe deleted!!!',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
}
