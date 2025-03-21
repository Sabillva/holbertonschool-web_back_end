#!/usr/bin/env python3
""" inserts a new document"""


def insert_school(mongo_collection, **kwargs):
    """Returns the new _id"""
    new_doc = mongo_collection.insert_one(kwargs)
    return new_doc.inserted_id