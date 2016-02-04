package handlers

import (
	"net/http"

	"github.com/tiborv/tibomat/Godeps/_workspace/src/github.com/gin-gonic/gin"
)

func views(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {

		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Tibor's Valgomat",
		})
	})
}
