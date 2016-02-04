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

func RetreiveAnswer(name string) Answer {
	var result Answer
	err := answers.Find(bson.M{"name": name}).One(&result)

	if err != nil {
		panic(err)
	}
	return result
}

//bson.ObjectIdHex()
func RetreiveAllAnswers(ua UserAnswer) []Answer {
	var results []Answer
	err := answers.Find(bson.M{"question": bson.ObjectIdHex(ua.QuestionID)}).All(&results)
	if err != nil {
		panic(err)
	}
	return results
}
