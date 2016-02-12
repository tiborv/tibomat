package handlers

import (
	"net/http"

	"github.com/tiborv/tibomat/Godeps/_workspace/src/github.com/gin-gonic/gin"
	"github.com/tiborv/tibomat/models"
)

func api(r *gin.RouterGroup) {
	partyAPI(r)
	answerAPI(r)
	questionAPI(r)
	dbAPI(r.Group("/db"))
}

func answerAPI(api *gin.RouterGroup) {
	api.GET("/answer", func(c *gin.Context) {
		c.JSON(http.StatusOK, models.RetreiveAllAnswers(c.Query("question")))
	})
}

func partyAPI(api *gin.RouterGroup) {
	api.GET("/party", func(c *gin.Context) {
		c.JSON(http.StatusOK, models.RetreiveAllParties())
	})
}

func questionAPI(api *gin.RouterGroup) {
	api.GET("/question", func(c *gin.Context) {
		c.JSON(http.StatusOK, models.RetreiveAllQuestions(c.Query("area")))
	})
}

func dbAPI(api *gin.RouterGroup) {
	api.POST("/rekt", func(c *gin.Context) {
		models.Rekt()
	})

	api.POST("/init", func(c *gin.Context) {
		models.InitDbData()
	})
}
