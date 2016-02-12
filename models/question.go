package models

import (
	"github.com/tiborv/tibomat/Godeps/_workspace/src/gopkg.in/mgo.v2"
	"github.com/tiborv/tibomat/Godeps/_workspace/src/gopkg.in/mgo.v2/bson"
)

var questions *mgo.Collection

type Question struct {
	ID    bson.ObjectId `bson:"_id,omitempty"`
	Title string        `json:"title"`
	Body  string        `json:"body"`
	Area  string        `json:"area"`
}

func (q Question) Create() Question {
	q.ID = bson.NewObjectId()
	err := questions.Insert(q)

	if err != nil {
		panic(err)
	}
	return q
}

func RetreiveAllQuestions(includeArea string) []Question {
	var results []Question
	err := questions.Find(bson.M{"$or": []interface{}{
		bson.M{"area": ""},
		bson.M{"area": includeArea},
	}}).All(&results)
	if err != nil {
		panic(err)
	}
	return results
}
