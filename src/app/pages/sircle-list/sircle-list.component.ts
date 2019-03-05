import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { SircleService } from '../../services/sircle.service';
// Import Models
import { Sircle } from '../../domain/test_db/sircle';

// START - USED SERVICES
/**
* SircleService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* SircleService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Sircle
 * @class SircleListComponent
 */
@Component({
    selector: 'app-sircle-list',
    templateUrl: './sircle-list.component.html',
    styleUrls: ['./sircle-list.component.css']
})
export class SircleListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private sircleService: SircleService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.sircleService.list();
    }

    /**
     * Select Sircle to remove
     *
     * @param {string} id Id of the Sircle to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Sircle
     */
    deleteItem() {
        this.sircleService.remove(this.idSelected);
    }

}
