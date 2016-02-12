package models

import (
	"github.com/tiborv/tibomat/Godeps/_workspace/src/gopkg.in/mgo.v2"
	"github.com/tiborv/tibomat/Godeps/_workspace/src/gopkg.in/mgo.v2/bson"
)

var parties *mgo.Collection

type Party struct {
	ID   bson.ObjectId `bson:"_id,omitempty"`
	Name string        `json:"name"`
}

func (p Party) Create() Party {
	p.ID = bson.NewObjectId()
	err := parties.Insert(p)

	if err != nil {
		panic(err)
	}
	return p
}

func RetreiveAllParties() []Party {
	var results []Party
	err := parties.Find(nil).All(&results)
	if err != nil {
		panic(err)
	}
	return results
}
