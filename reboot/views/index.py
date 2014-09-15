"""
Views for loading pages with context
"""
from zinnia.models.entry import Entry

from django.views.generic.base import TemplateView
from django.http import HttpResponse
from django.http import Http404

from posixpath import basename

import json

class JsonResponse(HttpResponse):
    def __init__(self, content={}, mimetype=None, status=None,
             content_type='application/json'):
        super(JsonResponse, self).__init__(json.dumps(content), mimetype=mimetype,
                                           status=status, content_type=content_type)
                                           
class HomeView(TemplateView):
    template_name = "base.html"

class EntryView(HomeView):
    
    def get_context_data(self, **kwargs):
        context = super(EntryView, self).get_context_data(**kwargs)
        try:
            post = Entry.objects.filter(slug=basename(self.request.path))[0]
        except Entry.DoesNotExist:
            raise Http404
        context['meta'] = post
        # Overwrite improper date format
        context['meta'].creation_date = post.creation_date.isoformat()
        return context
        
def entries(request):
    data = []
    recent_entries = Entry.objects.all()
    for entry in recent_entries:
        post = {'title': entry.title, 'content': entry.content, 'comments': [], 'creation_date': entry.creation_date.isoformat(), 'slug': entry.slug}
        for comment in entry.comments:
            comment_obj = {'comment': comment.comment, 'public': comment.is_public, 'user': comment.user_name}
            post['comments'].append(comment_obj)
        data.append(post)
    return JsonResponse(data)

