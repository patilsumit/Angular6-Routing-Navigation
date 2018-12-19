import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import {AngularFirestoreDocument} from 'angularfire2/firestore';
@Component({
  selector: 'app-my-firebase',
  templateUrl: './my-firebase.component.html',
  styleUrls: ['./my-firebase.component.css']
})
export class MyFirebaseComponent implements OnInit {

  itemsCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;


  courseName = [];
  cName;
  cDuration;
  count=0;
  myId:string;
  constructor(public db: AngularFirestore) {
    this.items=this.db.collection('courses').valueChanges();
    this.items.subscribe(items => {
        this.courseName.push(items[1]); 
    });

    console.log(this.courseName);
    this.itemsCollection=this.db.collection('courses');
   }
  myCourseName(a)
  {
    if(this.count==0)
    {
      const documentId=this.db.createId();  
    this.itemsCollection.doc(documentId).set({coursename:this.cName,duration:this.cDuration,id : documentId});  
    }
    else
    {
      this.itemDocument=this.db.doc(`courses/${this.myId}`);
      this.itemDocument.update({
        coursename:this.cName,duration:this.cDuration
      });
      this.count=0;
        a.innerHTML="Add";
    }
    this.cName='';
    this.cDuration=''; 
   
  }
 
  myDeleteNew(deleteItem : Item)
  {
    this.itemDocument=this.db.doc(`courses/${deleteItem.id}`);
    this.itemDocument.delete();
  }

  myEditNew(updateItem,a)
  {
     this.cName=updateItem.coursename;
     this.cDuration=updateItem.duration;
     this.count=1;

     this.myId=updateItem.id;
     a.innerHTML="Update";
  }
  ngOnInit() {
  }

}

interface Item
{
  coursename?: string;
  duration?: string;
  id ?:string;
}