import  mongoose from 'mongoose';

export class MongoDB {
	
    // Initialize database connection
	public static init(): any {
		const connection_string :string = process.env.MONGO_DB || "";
		const options = { 
            useCreateIndex: true, 
            useNewUrlParser: true, 
            useUnifiedTopology: true , 
            useFindAndModify: false, 
            autoIndex: true
        };

		mongoose.set('useCreateIndex', true);

		mongoose.connect(connection_string , options, (error) => {
			// handle the error
			if (error) {
				console.error('Failed to connect to the database server!!');
				throw error;
			} else {
                console.info('Connected to database server at: ' + connection_string);
			}
		});
	}
}

