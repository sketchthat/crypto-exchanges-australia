import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-common-exchange',
  templateUrl: './common-exchange.component.html',
  styleUrls: ['./common-exchange.component.scss']
})
export class CommonExchangeComponent implements OnInit {
  @Input() exchange: string;
  @Input() link: string;
  @Input() package: string;

  npmPackage: string;
  yarnPackage: string;

  constructor(
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.npmPackage = `npm i ${this.package} --save`;
    this.yarnPackage = `yarn add ${this.package}`;
  }

  copyPackage(isNpm: boolean) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';

    selBox.value = isNpm ? this.npmPackage : this.yarnPackage;

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
