
/*
 * Autor: Daniel Alvarado
 * Fecha de creación: 2024-01-24
 * Descripción: Crea un nuevo usuario
 * Historial:
 *	[v1.0] - [2024-01-24] - [Daniel Alvarado] - Creación del sp
*/

CREATE PROCEDURE [dbo].[sp_UserCreate]
	@modification_user_id	INT,
	@first_name			VARCHAR(50),
	@second_name		VARCHAR(50),
	@last_name			VARCHAR(50),
	@second_last_name	VARCHAR(50),
	@email				VARCHAR(50),
	@phone_number		VARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON
	IF NOT EXISTS (
		SELECT TOP 1 u.[user_id]
		FROM	dbo.[User] AS u
		WHERE	u.email = @email
			AND	u.is_active = 1
	) BEGIN
		BEGIN TRY
			BEGIN TRAN;
			INSERT INTO dbo.[User] (					
				 first_name			
				,second_name		
				,last_name			
				,second_last_name	
				,email				
				,phone_number		
				,modification_user_id
				,comments
			) VALUES (				
				 @first_name			
				,@second_name		
				,@last_name			
				,@second_last_name	
				,@email				
				,@phone_number		
				,@modification_user_id
				,'Creación de usuario'
			);
			COMMIT TRAN;
			SELECT
				success = 1,
				error = 0,
				msg = 'El usuario fue creado correctamente',
				[user_id] = SCOPE_IDENTITY();
		END TRY
		BEGIN CATCH
			ROLLBACK TRAN;
			SELECT
				success = 0,
				error = 1,
				msg = ERROR_MESSAGE(),
				[user_id] = 0;
		END CATCH
	END ELSE BEGIN
		SELECT 
			success = 1,
			error = 1,
			msg = 'Ya existe un usuario con el mismo email. Favor de revisar.',
			college_id = 0;
	END
END