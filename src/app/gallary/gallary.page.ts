import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController, NavController, MenuController, ToastController, Platform  } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Router }from '@angular/router';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.page.html',
  styleUrls: ['./gallary.page.scss'],
})
export class GallaryPage implements OnInit {
    errorMsg: any;
    loading: any;
    password: any;
    user: any;
    show: any = 'show';
    rs: any;

    res: any;
    user_info: any;
    ready: any;
    user_profile: any;

    imageURI: any;
    images: any = [];
    res_image: any;

    type: any;

    res_gallery: any;
    gallery: any;



    userImage: any = 'http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=96&d=mm&r=g';
    constructor(
        public loadingCtrl: LoadingController,
        public router: Router,
        public alertCtrl: AlertController,
        public storage: Storage,
        public menu: MenuController,
        private camera: Camera,
        private file: File,
        public transfer: FileTransfer,
        private toastController: ToastController,
        private plt: Platform,
        private loadingController: LoadingController,
        private actionSheetController: ActionSheetController,
        private ref: ChangeDetectorRef,
        private filePath: FilePath
    ) {


  if (this.plt.is('cordova')) {
    console.log('y');
  } else {
    console.log('n');
  }


    }

    ngOnInit() {
        
    }

    async selectImage(type) {
        this.images = [];
        this.type = type;
        const actionSheet = await this.actionSheetController.create({
            header: "Select Image Source",
            buttons: [{
                text: 'Load image from library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Capture image using camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
            ]
        });
        await actionSheet.present();
    }
 
    takePicture(sourceType: PictureSourceType) {
      console.log('camera');
        var options: CameraOptions = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }; 
        
      
        this.camera.getPicture(options).then(imagePath => {
             this.userImage = 'data:image/jpeg;base64,' + imagePath;

            console.log("USER IMAGE  ==== ", this.userImage);
          
            if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                        let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                        let smext = currentName.split('.').pop();
                        let ext = smext.toLowerCase();
                        this.copyFileToLocalDir(correctPath, currentName, this.createFileName(ext));
                    });
            } else {  
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                let smext = currentName.split('.').pop();
                let ext = smext.toLowerCase();
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName(ext));
            }
        });

    }

    createFileName(ext) {
        var d = new Date(),
            n = d.getTime(),
            newFileName = n + "." + ext;
        return newFileName;
    }

    copyFileToLocalDir(namePath, currentName, newFileName) {
      console.log('name='+namePath);
      console.log('cname='+currentName);
      console.log('nname='+newFileName);
      console.log('d='+this.file.dataDirectory);
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            //this.updateStoredImages(newFileName);
            alert('done');
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }

    updateStoredImages(name) {
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
        console.log('f='+filePath);
        console.log('r='+resPath);
        let newEntry = {
            name: name,
            path: resPath,
            filePath: filePath
        };

        this.images.push(newEntry);
        this.UploadImage(this.user);
        console.log(this.images);
        this.ref.detectChanges(); // trigger change detection cycle
    }


    pathForImage(img) {
        if (img === null) {
            return '';
        } else {
            let converted = (<any>window).Ionic.WebView.convertFileSrc(img);
            return converted;
        }
    }

    UploadImage(user) {
      console.log(user);
      /*
        this.allServicesService.showLoader('Uploading...')
        if (this.images.length > 0) {

            let _mime_type = 'image/jpeg'

            let smext = this.images[0].name.split('.').pop();
            let ext = smext.toLowerCase();

            if (ext == 'png') {
                _mime_type = 'image/png';
            }

            if (ext == 'jpeg') {
                _mime_type = 'image/jpeg';
            }

            if (ext == 'mov') {
                _mime_type = 'video/quicktime';
            }

            if (ext == 'mp4') {
                _mime_type = 'video/mp4';
            }

            if (ext == 'jpg') {
                _mime_type = 'image/jpeg';
            }

            const fileTransfer: FileTransferObject = this.transfer.create();
            let header: Headers = new Headers();
            header.append('Authorization', 'Bearer ' + user.token);
            let options: FileUploadOptions = {
                fileKey: 'file',
                fileName: user.user_id + '_featured.' + ext,
                chunkedMode: false,
                mimeType: _mime_type,
                params: { 'type': this.type, 'user': user.user_id, 'ext': ext },
                headers: { 'Authorization': 'Bearer ' + user.token }
            }

            let url = this.allServicesService.getURL();
            fileTransfer.upload(this.images[0].filePath, url + '/wp-json/wp/v2/media?token=' + user.token, options)
                .then((data1) => {
                    console.log(data1)
                    this.allServicesService.dismissLoading();
                    if (this.type == "barberGallery") {
                        this.GetUserProfileImages(user.token);
                    } else {
                        this.GetUserImage();
                    }

                    this.images = [];
                }, (err) => {
                    console.log(err);
                    this.allServicesService.dismissLoading();
                });
        }
        */
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            position: 'bottom',
            duration: 3000
        });
        toast.present();
    }


}
