package models

import (
	"math"

	"github.com/tiborv/tibomat/Godeps/_workspace/src/github.com/gin-gonic/gin"
)

type UserAnswer struct {
	QuestionID string  `bson:"_id" json:"question" binding:"required"`
	Value      float64 `json:",string" binding:"required"`
	Weight     float64 `json:",string" binding:"required"`
}

func (ua UserAnswer) GetScores(answers []Answer) (result []gin.H) {
	for _, answer := range answers {
		score := 4 - math.Abs(answer.Value-ua.Value+1)
		score *= ua.Weight
		result = append(result, gin.H{"score": score, "party": answer.Party, "value": answer.Value})
	}
	return
}
