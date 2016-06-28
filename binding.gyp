{
  "targets": [
  {
    "target_name": "siren",
    "sources": [ "src/siren.cc" ],
    "include_dirs+": [
      "/opt/occ/700/inc",
    ]
    "link_settings": {
      "libraries": [
        "-lTKernel",
        "-lTKMath"
      ],
      "library_dirs": [
        "/opt/occ/700/lib"
      ]
    }
  }
  ]
}
