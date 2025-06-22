import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';

import { Trip } from '../models/trip'; 
import { TripDataService } from '../trip-data.service'; 

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'], // <-- was "styleUrl" (fix this)
  providers: [TripDataService]  // <-- register the service
})
export class TripListingComponent implements OnInit {
  trips!: Trip[]; 
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {   
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(["add-trip"]);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  private getStuff(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else {
          this.message = 'There were no trips retrieved from the database.';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });
  }
}
