/*
 * Autor: Daniel Alvarado
 * Fecha de creación: 2024-01-24
 * Descripción: Actualiza un usuario
 * Historial:
 *	[v1.0] - [2024-01-24] - [Daniel Alvarado] - Creación del sp
*/

CREATE PROCEDURE [dbo].[sp_UserUpdate]
	@user_id				INT,
	@modification_user_id	INT,
	@first_name				VARCHAR(50),
	@second_name			VARCHAR(50),
	@last_name				VARCHAR(50),
	@second_last_name		VARCHAR(50),
	@email					VARCHAR(50),
	@phone_number			VARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON
	BEGIN TRY
		BEGIN TRAN;
		UPDATE	dbo.[User] 			
		SET		 first_name				= @first_name	
				,second_name			= @second_name	
				,last_name				= @last_name
				,second_last_name		= @second_last_name
				,email					= @email
				,phone_number			= @phone_number
				,modification_user_id	= @modification_user_id
				,modification_date		= GETDATE()
		WHERE	[user_id] = @user_id
		COMMIT TRAN;
		SELECT
			success		= 1,
			error		= 0,
			msg			= 'El usuario fue actualizado correctamente.',
			'user_id'	= @user_id;
	END TRY
	BEGIN CATCH
		ROLLBACK TRAN;
		SELECT
			success		= 0,
			error		= 1,
			msg			= ERROR_MESSAGE(),
			'user_id'	= 0;
	END CATCH
END