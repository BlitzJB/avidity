"""
Base views for the application.
 - Blueprint based architecture not established yet.
   as of now as number of views are very less.
"""

from flask import render_template, jsonify, request

from .app import app

from platform import system
if system() == 'Windows': SLASH_CHAR = '\\'
elif system() == 'Linux': SLASH_CHAR = '/'
else: raise Exception('Unknown platform')

def join(*args):
    """
    Join the args with the slash character.
    """
    return SLASH_CHAR.join(args)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/get_components')
def get_components():
  components = ['hero.svg', 'about.svg', 'mission.svg', 'vision.svg', 'values.svg', 'contact.html']
  mode = request.args.get('mode')
  payload = [{'markup': open(join('app', 'components', mode, component)).read(), 'index': index} for index, component in enumerate(components)]
  return jsonify(payload)