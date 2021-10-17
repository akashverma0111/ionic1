import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActionSheetController } from '@ionic/angular';
//import { ApiService } from "../api.service";
import { MediaService } from "../media.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Events } from "@ionic/angular";

@Component({
    selector: 'app-editprofile',
    templateUrl: './editprofile.page.html',
    styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
    profileForm: FormGroup
    user: any = {};
    userDetails: any = [];
    profileImage: any = [];
    profile_img: any = "";
    isUploaded: any = false;
    user_role: any;
    constructor(public actionSheetController: ActionSheetController, public media: MediaService, public location: Location) {
        this.profileForm = new FormGroup({
            full_name: new FormControl(""),
            sub_title: new FormControl(""),
            user_email: new FormControl(""),
            user_phone: new FormControl(""),
            facebook: new FormControl(""),
            instagram: new FormControl(""),
            mxsocial: new FormControl(""),
            soundcloud: new FormControl(""),
            address: new FormControl(""),

        });
    }
    ngOnInit() {
    }
    getProfile() {
       console.log('getProfile');

    }
    updateProfile(imageData: any, fileName) {
        var _self = this;
        let formData = new FormData();
        formData.append("token", "akashtoken");
        console.log()
        formData.append("profile_img", imageData, fileName);
        console.log('formData'+formData);
    }
    updateFormProfile(data) {
      console.log('data'+data);
    }
    ionViewWillEnter() {
            this.getProfile();
    }
    uploadProfileImage($event) {
        var _self = this;
        this.media.uploadImage(function(data, filename) {
            //_self.profile_img = data;
            _self.updateProfile(data, filename);
        });
    }
}