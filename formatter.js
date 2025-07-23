
function formatMessage(span) {
  const text = span.textContent;
  var formatted_text = marked.parse(text)


  span.innerHTML = DOMPurify.sanitize(formatted_text,
    {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'u', 'del', 's','h1','h2','h3','h4','h5','h6','code','a']
    })
  span.dataset.formatted = "true"
}
