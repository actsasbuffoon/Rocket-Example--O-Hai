class ExampleController
  bolt Rocket::Controller
  
  define_action :say_hello do
    current_user.transmit({"Example.be_greeted" => {message: "Howdy, #{params["name"]}!"}})
  end
  
end