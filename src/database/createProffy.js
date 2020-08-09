module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
    //o async é pra poder usar o await
    //inserir dados na tabela proffys
    //await aguarda executar antes de ir pra proxima linha
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        ); 
    `) 
    const proffy_id = insertedProffy.lastID //id que preciso para a proxima instrução que é inserir as aulas, ele pega o ultimo id inserido

    //inserir dados na tabela classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)
    const class_id = insertedClass.lastID

    //inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })
    //aqui vou executar todos os db.run das class_schedules
    await Promise.all(insertedAllClassScheduleValues)

}



