Rails.application.routes.draw do
  root "focus#home"

  get "home", to: "focus#home", as: "home"
  get "about", to: "focus#about", as: "about"

  get "leagues", to: "league#leagues", as: "leagues"
  get "standings", to: "league#standings", as: "standings"
  get "stats", to: "league#stats", as: "stats"

  namespace :api do
    namespace :v1 do
    end
  end
end
