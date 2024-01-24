
CREATE TABLE [dbo].[User](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[first_name] [varchar](30) NOT NULL,
	[second_name] [varchar](30) NOT NULL,
	[last_name] [varchar](30) NOT NULL,
	[second_last_name] [varchar](30) NOT NULL,
	[email] [varchar](30) NOT NULL,
	[phone_number] [varchar](15) NOT NULL,
	[is_active] [bit] NOT NULL,
	[comments] [varchar](50) NOT NULL,
	[creation_date] [datetime] NOT NULL,
	[modification_date] [datetime] NOT NULL,
	[modification_user_id] [int] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_first_name]  DEFAULT ('') FOR [first_name]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_second_name]  DEFAULT ('') FOR [second_name]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_last_name]  DEFAULT ('') FOR [last_name]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_second_last_name]  DEFAULT ('') FOR [second_last_name]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_email]  DEFAULT ('') FOR [email]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_phone_number]  DEFAULT ('') FOR [phone_number]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_is_active]  DEFAULT ((1)) FOR [is_active]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_comments]  DEFAULT ('') FOR [comments]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_creation_date]  DEFAULT (getdate()) FOR [creation_date]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_modification_date]  DEFAULT (getdate()) FOR [modification_date]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_modification_user_id]  DEFAULT ((0)) FOR [modification_user_id]
GO
