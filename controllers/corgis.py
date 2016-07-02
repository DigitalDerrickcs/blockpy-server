import os
import json
from pprint import pprint

from flask.ext.wtf import Form
from wtforms import IntegerField, BooleanField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from main import app

from models.models import db, Assignment

from controllers.helpers import lti



blueprint_corgis = Blueprint('corgis', __name__, url_prefix='/corgis')

@blueprint_corgis.route('/_images/<path:path>', methods=['GET', 'POST'])
def corgis_static_images(path):
    return app.send_static_file('images/'+path)
    
@blueprint_corgis.route('/_lib/<path:path>', methods=['GET', 'POST'])
def corgis_static_libs(path):
    return app.send_static_file('libs/'+path)

@blueprint_corgis.route('/', methods=['GET', 'POST'])    
def index():
    return render_template('corgis/generic.html', name='corgis/libraries.html')
    
@blueprint_corgis.route('/<language>/', methods=['GET', 'POST'])    
@blueprint_corgis.route('/<language>/index.html', methods=['GET', 'POST'])
def language_index(language):
    return render_template('corgis/generic.html', name='corgis/{language}/{language}.html'.format(language=language))

@blueprint_corgis.route('/<language>/<dataset>/', methods=['GET', 'POST'])    
@blueprint_corgis.route('/<language>/<dataset>/<path:path>', methods=['GET', 'POST'])
def language_dataset(language, dataset, path):
    if path == dataset+'.html' or path is None:
        return render_template('corgis/generic.html', name='corgis/{language}/{dataset}/{dataset}.html'.format(language=language, dataset=dataset))
    else:
        return app.send_static_file('corgis/{language}/{dataset}/{path}'.format(language=language, dataset=dataset, path=path))
        
blueprint_datasets = Blueprint('datasets', __name__, url_prefix='/datasets')

@blueprint_datasets.route('/', methods=['GET', 'POST'])    
def redirect_index():
    return redirect(url_for('corgis.index'))
    
@blueprint_datasets.route('/<language>/', methods=['GET', 'POST'])    
@blueprint_datasets.route('/<language>/index.html', methods=['GET', 'POST'])
def redirect_language_index(language):
    return redirect(url_for('corgis.language_index', language=language))

@blueprint_datasets.route('/<language>/<dataset>/', methods=['GET', 'POST'])    
@blueprint_datasets.route('/<language>/<dataset>/<path:path>', methods=['GET', 'POST'])
def redirect_language_dataset(language, dataset, path):
    return redirect(url_for('corgis.language_dataset', language=language, dataset=dataset, path=path))
