import { Injectable } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
//import { File, FileEntry } from '@ionic-native/file/ngx'


import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Router }from '@angular/router';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


let Url = 'C:/Users/Akash DON/Desktop/Apps/mobile/src/assets/upload/';

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    image: any;
    options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
        //mediaType: this.camera.MediaType.PICTURE
    }
    constructor(public camera: Camera, public file: File, public actionSheet: ActionSheetController) {

    }
    base64toBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
    }
    showCameraWithPicture(callback) {
        this.options['PictureSourceType'] = this.camera.PictureSourceType.PHOTOLIBRARY;
        this.options['mediaType'] = this.camera.MediaType.PICTURE;
        this.camera.getPicture(this.options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            callback(base64Image);
        }, (err) => {

        });
    }
    showGalleryWithPicture(callback) {
        this.options['PictureSourceType'] = this.camera.PictureSourceType.PHOTOLIBRARY;
        this.options['mediaType'] = this.camera.MediaType.PICTURE;
        this.camera.getPicture(this.options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            callback(base64Image);
        }, (err) => {

        });
    }
    async uploadImage(callback) {
        let action = await this.actionSheet.create({
            header: "Upload Photo",
            buttons: [{
                    text: "Upload from Gallery",
                    icon: "share",
                    handler: () => {
                        console.log("Gallery clicked");
                        this.getImage(
                            this.camera.PictureSourceType.PHOTOLIBRARY,
                            callback
                        );
                    }
                },
                {
                    text: "Use Camera",
                    icon: "camera",
                    handler: () => {
                        console.log("Camera clicked");
                        this.getImage(
                            this.camera.PictureSourceType.CAMERA,
                            callback
                        );
                    }
                },
                {
                    text: "Cancel",
                    role: "destructive",
                    icon: "close",
                    handler: () => {
                        console.log("close");
                    }
                }
            ]
        });
        await action.present();
    }

    getImage(sourceType = this.camera.PictureSourceType.CAMERA, callback) {
        console.log("IMAGE LOCAL URL === ", sourceType);
        const options: CameraOptions = {
            quality: 30,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };

        this.camera.getPicture(options).then(
            imageData => {
                //console.log(imageData);
                this.image = imageData[0].localURL;
                console.log(this.image);
                this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
                    entry.file(uploadfile => {
                        console.log(uploadfile);
                        this.readFile(uploadfile, callback);
                    });
                });
                //let base64Image = "data:image/jpeg;base64," + imageData;
                //this.updateProfile(this.base64Image);
                //callback(base64Image);
                //console.log("Base 64 == ", base64Image);
            },
            err => {
                console.log(err);
                // this.presentToast(err);
            }
        );
    }
    readFile(file: any, callback) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            callback(imgBlob, file.name);
        };
        reader.readAsArrayBuffer(file);
    }
    // async uploadImage(callback) {
    //     let action = await this.actionSheet.create({
    //         header: "Upload Photo",
    //         buttons: [{
    //                 text: "Upload from Gallery",
    //                 icon: "share",
    //                 handler: () => {
    //                     console.log("Gallery clicked");
    //                     this.showCameraWithPicture(callback)
    //                 }
    //             },
    //             {
    //                 text: "Use Camera",
    //                 icon: "camera",
    //                 handler: () => {
    //                     console.log("Camera clicked");
    //                     this.showCameraWithPicture(callback);
    //                 }
    //             },
    //             {
    //                 text: "Cancel",
    //                 role: "destructive",
    //                 icon: "close",
    //                 handler: () => {
    //                     console.log("close");
    //                 }
    //             }
    //         ]
    //     });
    //     await action.present();
    // }

}