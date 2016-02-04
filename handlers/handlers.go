package handlers

import "github.com/tiborv/tibomat/Godeps/_workspace/src/github.com/gin-gonic/gin"

func Register(r *gin.Engine) {
	views(r)
	api(r.Group("/api"))
}
