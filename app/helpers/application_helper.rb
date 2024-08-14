module ApplicationHelper
  def format_time(hour)
    if hour.present?
      # Format integer hour into HH:MM
      "#{hour.to_s.rjust(2, '0')}:00"
    else
      ''
    end
  end
end
