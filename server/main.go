package main

import (
	"fmt"

	"github.com/slack-go/slack"
)

func main() {
	api := slack.New("xoxb-2749428613425-2733853883717-lSxwDg1CqG5uDWJXeMLrzDE7")
	user, err := api.GetUserInfo("U02MR1KKC3W")
	if err != nil {
		fmt.Printf("%s\n", err)
	}
	fmt.Printf("ID: %s, Fullname: %s, Email: %s\n", user.ID, user.Profile.RealName, user.Profile.Email)
}