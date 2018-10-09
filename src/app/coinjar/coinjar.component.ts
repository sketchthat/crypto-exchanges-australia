import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-coinjar',
  templateUrl: './coinjar.component.html',
  styleUrls: ['./coinjar.component.scss']
})
export class CoinjarComponent implements OnInit {

  constructor(
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;

    document.body.appendChild(selBox);

    selBox.focus();
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.snackbar.open('Copied to clipboard!', 'Close', {
      duration: 3000
    });
  }
}
