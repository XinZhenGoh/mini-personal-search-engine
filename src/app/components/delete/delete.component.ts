import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {DataModel} from '../../models/data.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  enteredEntry = 'Please proceed with caution.';
  data: Observable<DataModel[]>;

  constructor(public db: AngularFirestore) {
  }

  ngOnInit(): void {

  }

  delete(keyIn: string) {
    const deletelist = this.db.collection('codeConcepts', ref => ref.where('key', '==', keyIn.toLowerCase()));
    deletelist.get().subscribe(delitems => delitems.forEach(doc => doc.ref.delete()));
    this.enteredEntry = 'Succesfully deleted key : ' + keyIn;
  }
}
