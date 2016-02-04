package models

import (
	"fmt"

	"github.com/tiborv/tibomat/Godeps/_workspace/src/gopkg.in/mgo.v2"
)

var db *mgo.Database
var session *mgo.Session

func InitDb(dburl, dbname string) {
	session, err := mgo.Dial(dburl)
	if err != nil {
		panic(err)
	}
	session.SetMode(mgo.Monotonic, true)
	db = session.DB(dbname)

	answers = db.C("answer")
	questions = db.C("question")
	parties = db.C("party")

	if len(RetreiveAllParties()) == 0 {
		InitDbData()
	}
}

func CloseDb() {
	session.Close()
}

func InitDbData() {
	fmt.Println("Creating initial db data...")

	q1 := Question{Title: "Trondheim", Body: "Rosenborg vinner tippeligaen i 2045", Area: "trondheim"}.Create()
	q2 := Question{Title: "Oslo", Body: "Tøyen burger og kebab lager god mat", Area: "oslo"}.Create()
	q3 := Question{Title: "Bergen", Body: "Fisk smaker godt alltid", Area: "bergen"}.Create()
	q4 := Question{Title: "Julenissen", Body: "Julenissen bor i Russland"}.Create()
	q5 := Question{Title: "Bromstad", Body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}.Create()
	q6 := Question{Title: "Bank", Body: "Du e lætt å bank"}.Create()

	p1 := Party{Name: "SV"}.Create()
	p2 := Party{Name: "FRP"}.Create()
	p3 := Party{Name: "H"}.Create()
	p4 := Party{Name: "Trump"}.Create()
	Party{Name: "Hilary"}.Create()
	Party{Name: "Sanders"}.Create()

	Answer{Value: 1, Party: p4.ID, Question: q1.ID}.Create()
	Answer{Value: 2, Party: p4.ID, Question: q2.ID}.Create()
	Answer{Value: 3, Party: p4.ID, Question: q3.ID}.Create()
	Answer{Value: 4, Party: p4.ID, Question: q4.ID}.Create()

	Answer{Value: 2, Party: p1.ID, Question: q1.ID}.Create()
	Answer{Value: 2, Party: p1.ID, Question: q2.ID}.Create()
	Answer{Value: 2, Party: p1.ID, Question: q3.ID}.Create()
	Answer{Value: 2, Party: p1.ID, Question: q4.ID}.Create()
	Answer{Value: 2, Party: p1.ID, Question: q5.ID}.Create()
	Answer{Value: 2, Party: p1.ID, Question: q6.ID}.Create()

	Answer{Value: 1, Party: p2.ID, Question: q1.ID}.Create()
	Answer{Value: 1, Party: p2.ID, Question: q2.ID}.Create()
	Answer{Value: 1, Party: p2.ID, Question: q3.ID}.Create()
	Answer{Value: 1, Party: p2.ID, Question: q4.ID}.Create()
	Answer{Value: 1, Party: p2.ID, Question: q5.ID}.Create()
	Answer{Value: 1, Party: p2.ID, Question: q6.ID}.Create()

	Answer{Value: 3, Party: p3.ID, Question: q1.ID}.Create()
	Answer{Value: 3, Party: p3.ID, Question: q2.ID}.Create()
	Answer{Value: 3, Party: p3.ID, Question: q3.ID}.Create()
	Answer{Value: 3, Party: p3.ID, Question: q4.ID}.Create()
	Answer{Value: 3, Party: p3.ID, Question: q5.ID}.Create()
	Answer{Value: 3, Party: p3.ID, Question: q6.ID}.Create()
}

func Rekt() {
	db.DropDatabase()
}
