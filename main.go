package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
)

func main() {
	// version 4 Echo framework
	e := echo.New()
	//Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	// CORS restricted
	// with GET, PUT, POST or DELETE method
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

	e.Static("/", "public")
	log.Error(e.Start(":9000"))
}
