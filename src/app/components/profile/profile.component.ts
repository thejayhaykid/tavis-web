import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [
      fragment.get('access_token'),
      fragment.get('token_type'),
    ];

    if (!accessToken) {
      // redirect to signin
    }

    fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((response) => {
        console.log(response);
      });
  }
}
