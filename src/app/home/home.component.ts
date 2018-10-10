import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface Exchange {
  name: string;
  slug: string;
  build: string;
  coverage: string;
  dependencies: string;
  package: {
    github: string;
    npm: string;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Exchange[];

  constructor(
    private title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Australian Crypto Exchanges');

    this.setupExchanges();
  }

  setupExchanges() {
    this.displayedColumns = ['name', 'build', 'coverage', 'dependencies', 'package'];

    this.dataSource = [
      this.setupExchange('ACX', 'acx'),
      this.setupExchange('BlockBid', 'blockbid'),
      this.setupExchange('BTC Markets', 'btcmarkets'),
      this.setupExchange('CoinJar', 'coinjarexchange'),
      this.setupExchange('Huobi', 'huobi-australia'),
      this.setupExchange('Independent Reserve', 'independent-reserve', 'independentreserve', 'ir-client'),
    ];
  }

  setupExchange(name: string, slug: string, github?: string, npm?: string): Exchange {
    const gitHubPath = 'https://github.com/sketchthat/' + (github ? github : slug);
    const npmPath = 'https://npmjs.com/package/' + (npm ? npm : slug);

    return {
      name,
      slug,
      build: `https://travis-ci.org/sketchthat/${slug}.svg?branch=master`,
      coverage: `https://coveralls.io/repos/github/sketchthat/${slug}/badge.svg?branch=master`,
      dependencies: `https://david-dm.org/sketchthat/${slug}.svg`,
      package: {
        github: gitHubPath,
        npm: npmPath,
      },
    };
  }

  errorHandler(event) {
    console.log(typeof event);
    event.target.src = '/assets/transparent-pixel.png';
  }
}
