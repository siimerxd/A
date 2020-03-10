let occupations = {
    5120:{name:'Kokk', rate: 0},
    7131:{name:'Maaler', rate: 0},
    7411:{name:'Ehitaja', rate: 0},
    7512:{name:'Pagar', rate: 0}
}

fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/DBL245+DBL315+DBL330+DBL343+DBL349.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
    .then(Response => {
        return Response.json()
    })
    .then(data => {
       console.log(data)

       data.structure.dimensions.observation[0].values.forEach(element => {
           console.log(element.name.split(' ')[0])
       });

       
    })
    