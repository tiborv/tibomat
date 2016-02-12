package models

import (
	"github.com/tiborv/tibomat/Godeps/_workspace/src/gopkg.in/mgo.v2"
	"github.com/tiborv/tibomat/Godeps/_workspace/src/gopkg.in/mgo.v2/bson"
)

var answers *mgo.Collection

type Answer struct {
	ID       bson.ObjectId `bson:"_id,omitempty"`
	Value    float64       `json:"value"`
	Party    bson.ObjectId `json:"party"`
	Question bson.ObjectId `json:"question"`
}

func (a Answer) Create() Answer {
	a.ID = bson.NewObjectId()
	err := answers.Insert(a)

	if err != nil {
		panic(err)
	}
	return a
}

func RetreiveAllAnswers(question string) []Answer {
	var results []Answer
	err := answers.Find(bson.M{"question": bson.ObjectIdHex(question)}).All(&results)
	if err != nil {
		panic(err)
	}
	return results
}
