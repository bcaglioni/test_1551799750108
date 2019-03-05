// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { SircleService } from '../../services/sircle.service';
import { RoomService } from '../../services/room.service';

import { Sircle } from '../../domain/test_db/sircle';
import { Room } from '../../domain/test_db/room';

// START - USED SERVICES
/**
* SircleService.create
*	@description CRUD ACTION create
*
* RoomService.findBysircles
*	@description CRUD ACTION findBysircles
*	@param Objectid key Id della risorsa sircles da cercare
*
* SircleService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* SircleService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Sircle
 */
@Component({
    selector: 'app-sircle-edit',
    templateUrl: 'sircle-edit.component.html',
    styleUrls: ['sircle-edit.component.css']
})
export class SircleEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Sircle>;
    isNew: Boolean = true;
    formValid: Boolean;

    listSircles: Sircle[];

    externalRoom: Room[];

    constructor(
        private sircleService: SircleService,
        private roomService: RoomService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalRoom = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.sircleService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.roomService.findBySircles(id).subscribe(list => this.externalRoom = list);
            }
            // Get relations
        });
    }



    /**
     * Save Sircle
     *
     * @param {boolean} formValid Form validity check
     * @param Sircle item Sircle to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.sircleService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.sircleService.update(this.itemDoc, this.item);
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
