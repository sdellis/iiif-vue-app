/* eslint-disable key-spacing */
/* eslint-disable quotes */
/* eslint-disable comma-spacing */
/* eslint-disable indent */
const fixtures = [
  {
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://iiif.io/api/presentation/2.0/example/fixtures/45/manifest.json",
  "@type": "sc:Manifest",
  "label": "Test 45 Manifest: External text/plain Transcription on Canvas",
  "within": "http://iiif.io/api/presentation/2.0/example/fixtures/collection.json",
  "sequences": [
    {
      "@type": "sc:Sequence",
      "label": "Test 45 Sequence 1",
      "canvases": [
        {
          "@id": "http://iiif.io/api/presentation/2.0/example/fixtures/canvas/45/c1.json",
          "@type": "sc:Canvas",
          "label": "Test 45 Canvas: 1",
          "height": 1800,
          "width": 1200,
          "images": [
            {
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "http://iiif.io/api/presentation/2.0/example/fixtures/resources/page1-full.png",
                "@type": "dctypes:Image",
                "height": 1800,
                "width": 1200
              },
              "on": "http://iiif.io/api/presentation/2.0/example/fixtures/canvas/45/c1.json"
            }
          ],
          "otherContent": [
            {
              "@id": "http://iiif.io/api/presentation/2.0/example/fixtures/list/45/list1.json",
              "@type": "sc:AnnotationList",
              "label": "Test 45 List 1"
            }
          ]
        }
      ]
    }
  ]
}]

export default fixtures
