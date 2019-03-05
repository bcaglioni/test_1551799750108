// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { RoomService } from '../../services/room.service';
import { SircleService } from '../../services/sircle.service';

import { Room } from '../../domain/test_db/room';
import { Sircle } from '../../domain/test_db/sircle';

// START - USED SERVICES
/**
* RoomService.create
*	@description CRUD ACTION create
*
* RoomService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* SircleService.list
*	@description CRUD ACTION list
*
* RoomService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Room
 */
@Component({
    selector: 'app-room-edit',
    templateUrl: 'room-edit.component.html',
    styleUrls: ['room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Room>;
    isNew: Boolean = true;
    formValid: Boolean;

    listSircles: Sircle[];


    constructor(
        private roomService: RoomService,
        private sircleService: SircleService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.roomService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
            this.sircleService.list().subscribe(list => this.listSircles = list);
        });
    }



    /**
     * Save Room
     *
     * @param {boolean} formValid Form validity check
     * @param Room item Room to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.roomService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.roomService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
