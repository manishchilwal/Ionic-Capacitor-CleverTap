import { Component } from '@angular/core';

declare const CleverTap: any; // Declare CleverTap globally for TypeScript

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  // Method to log user profile
  onUserLogin() {
    const profile = {
      Name: 'Captain America',
      Identity: '100',
      Email: 'captain@america.com',
      Phone: '+14155551234',
      stuff: ['bags', 'shoes'], // Custom Key-Value Data
    };
    CleverTap.onUserLogin(profile);
    console.log('User Profile Sent to CleverTap:', profile);
  }

  // Method to record an event with event data
  recordEvent() {
    const eventData = {
      first: 'partridge',
      second: 'turtledoves',
    };
    CleverTap.recordEventWithNameAndProps('Ionic Cordova Event', eventData);
    console.log('Custom Event Sent to CleverTap:', eventData);
  }

  // Method to record a simple event without event data
  recordSimpleEvent() {
    CleverTap.recordEventWithName('Ionic Cordova Simple Event');
    console.log('Simple Event Sent to CleverTap');
  }
}
