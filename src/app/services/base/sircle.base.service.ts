/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE sircleBaseService PLEASE EDIT ../sircle.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Sircle } from '../../domain/test_db/sircle';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Sircle.service.ts
 */

/*
 * SCHEMA DB Sircle
 *
	{
		name: {
			type: 'String'
		},
		sircleId: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		sircles: {
			type: Schema.ObjectId,
			ref : "Room"
		},
	}
 *
 */
@Injectable()
export class SircleBaseService {

    private sircleCollection: AngularFirestoreCollection<Sircle>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.sircleCollection = afs.collection<Sircle>('sircle');
    }


    // CRUD METHODS

    /**
    * SircleService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Sircle): Promise<DocumentReference> {
        return this.sircleCollection.add(item);
    }

    /**
    * SircleService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string) {
        const itemDoc: AngularFirestoreDocument<any> = this.sircleCollection.doc(id);
        itemDoc.delete();
    }

    /**
    * SircleService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): AngularFirestoreDocument<Sircle> {
        return this.afs.doc<Sircle>('sircle/' + id);
    }

    /**
    * SircleService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Sircle[]> {
        return this.afs.collection('sircle').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Sircle;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * SircleService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(itemDoc: AngularFirestoreDocument<Sircle>, item: Sircle): Promise<void> {
        return itemDoc.update(item);
    }


    // Custom APIs

}
