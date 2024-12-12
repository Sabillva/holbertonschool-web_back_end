#!/usr/bin/env python3
""" changes all topics of a school document"""


def update_topics(mongo_collection, name, topics):
    """ (list of strings) will be the list of topics approached in the school"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})