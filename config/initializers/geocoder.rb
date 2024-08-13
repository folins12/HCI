# config/initializers/geocoder.rb
Geocoder.configure(
  lookup: :google,
  api_key: 'AIzaSyAgX5q9nH4yvlGDQapTpsKDmvBnL9JlHh4',
  use_https: true,
  timeout: 5 # Imposta un timeout in secondi
)
