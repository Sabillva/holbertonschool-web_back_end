#!/usr/bin/env python3
"""lists all documents """

def list_all(mongo_collection):
    """Return an empty list if no document"""
    doc = mongo_collection.find()
    return doc