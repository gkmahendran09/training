from django.shortcuts import render
from django.contrib.auth.decorators import login_required
import random

from .models import Quote

# @login_required
def welcome(request):
    context = {}
    random_id = str(random.randint(1, 7))

    # random_quote = Quote.objects.get(pk=random_id)
    # random_quote = Quote.objects.filter(pk=random_id).values('id')
    
    random_quote = Quote.objects.raw('SELECT * FROM "quote_quote" WHERE "quote_quote"."id" = %s LIMIT 21', [random_id])
    for obj in random_quote:
        context['random_quote'] = obj

    # context = {
    #     'random_quote': random_quote 
    # }

    return render(request, 'welcome.html', context=context)
