"""
Base views for the application.
 - Blueprint based architecture not established yet.
   as of now as number of views are very less.
"""

from flask import render_template

from .app import app


@app.route('/')
def index():
  return render_template('index.html')