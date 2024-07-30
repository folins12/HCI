per fare un href:
aggiungere la route in route.rb esemio:```
  root 'home#index'
  get 'vivai', to: 'vivai#index',
  get 'piante', to: 'piante#index'```

per l'href:<%= link_to 'Torna alla Home Page', root_path %>
<%= link_to 'Vai alla sezione piante', piante_path %>

e va aggiunto il controllore
