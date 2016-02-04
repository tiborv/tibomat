package main

import (
	"os"

	"github.com/tiborv/tibomat/Godeps/_workspace/src/github.com/gin-gonic/gin"
	"github.com/tiborv/tibomat/handlers"
	"github.com/tiborv/tibomat/models"
)

func main() {
	port := os.Getenv("PORT")
	monogdb := os.Getenv("MONGO_URL")

	if monogdb == "" {
		models.InitDb("localhost", "tibomat")
	} else {
		models.InitDb(monogdb, "tibomat")
	}

	router := gin.New()
	router.Use(gin.Logger())
	router.Static("/static", "static")
	handlers.Register(router)
	router.LoadHTMLGlob("templates/*")

	if port == "" {
		router.Run(":" + "3000")
	} else {
		router.Run(":" + port)

	}
}
