class PagesController < ApplicationController
  protect_from_forgery with: :null_session, prepend: true

  def index

  end
end
