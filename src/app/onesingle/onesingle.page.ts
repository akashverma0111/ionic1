import { Component, OnInit } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-onesingle',
  templateUrl: './onesingle.page.html',
  styleUrls: ['./onesingle.page.scss'],
})
export class OnesinglePage implements OnInit {

signalid: string="52d6f239-5bf0-4be1-a42d-b559372428c6";
firebaseid: string="204119194580";
  constructor(public oneSignal: OneSignal) {

    oneSignal.startInit(this.signalid, this.firebaseid);

oneSignal.inFocusDisplaying(oneSignal.OSInFocusDisplayOption.InAppAlert);

oneSignal.handleNotificationReceived().subscribe((res) => {
 // do something when notification is received
 console.log(res);
});

oneSignal.handleNotificationOpened().subscribe((res) => {
  // do something when a notification is opened
  console.log(res);
});

this.oneSignal.endInit();


   }

  ngOnInit() {
  }



}
