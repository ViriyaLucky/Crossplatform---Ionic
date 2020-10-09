import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSave(){
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message:'added new contact'}, 'confirm');
      this.presentToast();
    });
  }
  
  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Save contact...',
      duration: 5000
    });
    await loading.present();

    const{ role, data } = await loading.onDidDismiss();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'New contact added.',
      position: 'bottom',
      color: 'success',
      duration: 2000
    });

    toast.present();
  }

}
